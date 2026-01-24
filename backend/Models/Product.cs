namespace KITrades.Api.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; } = default!;
        public string Brand { get; set; } = default!;
        public string Category { get; set; } = default!;
        public string Description { get; set; } = default!;
        
        // URL or relative path to the product image
        public string ImageUrl { get; set; } = default!;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
    }
}
