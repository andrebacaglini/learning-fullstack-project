using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _dbContext;
        public ProductsController(StoreContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProductsAsync()
        {
            return await _dbContext.Products.ToListAsync();
        }

        [HttpGet("{productId}")]
        public async Task<ActionResult<Product>> GetProductsAsync(int productId)
        {
            var product = await _dbContext.Products.FindAsync(productId);
            return product == null ? NotFound() : product;
        }
    }
}