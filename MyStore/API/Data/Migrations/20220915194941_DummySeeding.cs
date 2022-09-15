using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class DummySeeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Brand", "Description", "Name", "PictureUrl", "Price", "QuantityInStock", "Type" },
                values: new object[,]
                {
                    { 1, "Some brand", "This is a full description for product 1", "Product 1", "", 100L, 1, "A type" },
                    { 2, "Some brand", "This is a full description for product 2", "Product 2", "", 200L, 2, "A type" },
                    { 3, "Some brand", "This is a full description for product 3", "Product 3", "", 300L, 3, "A type" },
                    { 4, "Some brand", "This is a full description for product 4", "Product 4", "", 400L, 4, "A type" },
                    { 5, "Some brand", "This is a full description for product 5", "Product 5", "", 500L, 5, "A type" },
                    { 6, "Some brand", "This is a full description for product 6", "Product 6", "", 600L, 6, "A type" },
                    { 7, "Some brand", "This is a full description for product 7", "Product 7", "", 700L, 7, "A type" },
                    { 8, "Some brand", "This is a full description for product 8", "Product 8", "", 800L, 8, "A type" },
                    { 9, "Some brand", "This is a full description for product 9", "Product 9", "", 900L, 9, "A type" },
                    { 10, "Some brand", "This is a full description for product 10", "Product 10", "", 1000L, 10, "A type" },
                    { 11, "Some brand", "This is a full description for product 11", "Product 11", "", 1100L, 11, "A type" },
                    { 12, "Some brand", "This is a full description for product 12", "Product 12", "", 1200L, 12, "A type" },
                    { 13, "Some brand", "This is a full description for product 13", "Product 13", "", 1300L, 13, "A type" },
                    { 14, "Some brand", "This is a full description for product 14", "Product 14", "", 1400L, 14, "A type" },
                    { 15, "Some brand", "This is a full description for product 15", "Product 15", "", 1500L, 15, "A type" },
                    { 16, "Some brand", "This is a full description for product 16", "Product 16", "", 1600L, 16, "A type" },
                    { 17, "Some brand", "This is a full description for product 17", "Product 17", "", 1700L, 17, "A type" },
                    { 18, "Some brand", "This is a full description for product 18", "Product 18", "", 1800L, 18, "A type" },
                    { 19, "Some brand", "This is a full description for product 19", "Product 19", "", 1900L, 19, "A type" },
                    { 20, "Some brand", "This is a full description for product 20", "Product 20", "", 2000L, 20, "A type" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 20);
        }
    }
}
