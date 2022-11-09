using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _storeContext;
        public BasketController(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasketAsync();

            if (basket == null) return NotFound();
            return MapBasketToDto(basket);
        }

        [HttpPost]
        public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetrieveBasketAsync();

            if (basket is null)
            {
                basket = CreateBasket();
            }

            var product = await _storeContext.Products.FirstOrDefaultAsync(x => x.Id == productId);

            if (product is null) return BadRequest(new ProblemDetails { Title = "Product not found!" });

            basket.AddItem(product, quantity);

            var result = await _storeContext.SaveChangesAsync();

            return result > 0 ? CreatedAtRoute(nameof(GetBasket), MapBasketToDto(basket)) : BadRequest("Problem when saving basket");
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            var basket = await RetrieveBasketAsync();

            if (basket is null) return NotFound("No basket found");

            if (!basket.Items.Any(x => x.ProductId == productId)) return NotFound("Product not found in basket");

            basket.RemoveItem(productId, quantity);

            var result = await _storeContext.SaveChangesAsync();

            return result > 0 ? Ok() : BadRequest(new ProblemDetails { Title = "An error occur when trying to remove items from basket" });
        }

        private BasketDto MapBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(x => new BasketItemDto
                {
                    ProductId = x.ProductId,
                    Name = x.Product.Name,
                    Price = x.Product.Price,
                    PictureUrl = x.Product.PictureUrl,
                    Brand = x.Product.Brand,
                    Type = x.Product.Type,
                    Quantity = x.Quantity
                }).ToList()
            };
        }

        private Basket CreateBasket()
        {
            var basket = new Basket
            {
                BuyerId = Guid.NewGuid().ToString()
            };

            var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("buyerId", basket.BuyerId, cookieOptions);
            _storeContext.Baskets.Add(basket);
            return basket;
        }

        private async Task<Basket> RetrieveBasketAsync()
        {
            return await _storeContext.Baskets
                        .Include(x => x.Items)
                        .ThenInclude(x => x.Product)
                        .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        }

    }
}