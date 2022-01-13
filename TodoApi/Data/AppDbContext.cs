using Microsoft.EntityFrameworkCore;
using TodoApi.Model;

namespace TodoApi.Data
{
    public class AppDbContext : DbContext
    {
        private readonly IConfiguration _configuration;
        private string host;
        private string connections;
        public AppDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<TodoModel> Todos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseMySql(_configuration.GetConnectionString("MysqlConnection"),
                new MySqlServerVersion(new Version(5, 7)));

    }
}
