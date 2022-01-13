using Microsoft.AspNetCore.Mvc;
using TodoApi.Data;
using TodoApi.Model;

namespace TodoApi.Controllers
{
    [Route("v1/todos")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TodosController([FromServices] AppDbContext context)
        {
            _context = context;
        }
        // GET: v1/todos
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var todos = _context.Todos.OrderBy(todo => todo.Done).ToList();
                return Ok(todos);
            }
            catch (Exception ex)
            {

                return BadRequest(new { error = ex.Message });
            }
        }

        // GET: v1/todos/done
        [HttpGet("done")]
        public IActionResult GetDone()
        {
            try
            {
                var todos = _context.Todos.Where(x => x.Done == true).ToList();
                return Ok(todos);
            }
            catch (Exception ex)
            {

                return BadRequest(new { error = ex.Message });
            }
        }

        // GET v1/todos/{id}
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var todo = _context.Todos.FirstOrDefault(x => x.Id == id);
            if (todo == null)
                return NotFound();
            return Ok(todo);
        }

        [HttpPost("search")]
        public IActionResult Search(string search)
        {

            var todos = _context.Todos.OrderBy(todo => todo.Done).ToList()
                .Where(x => x.Title.Contains(search, System.StringComparison.CurrentCultureIgnoreCase)) // then filter the data
                .ToList();


            return Ok(todos);
        }

        // POST v1/todos
        [HttpPost]
        public IActionResult Post([FromBody] TodoModel model)
        {
            var todo = new TodoModel
            {
                Title = model.Title,
                Done = false,
                CreateAt = DateTime.UtcNow
            };

            _context.Todos.Add(todo);
            _context.SaveChanges();

            return Created($"todos/{todo.Id}", todo);
        }

        // PUT v1/todos/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] TodoModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var todo = _context.Todos.FirstOrDefault(y => y.Id == id);
            if (todo == null)
                return NotFound();

            todo.Title = model.Title;
            todo.Done = model.Done;
            todo.UpdateAt = DateTime.UtcNow;

            _context.Todos.Update(todo);
            _context.SaveChanges();

            return Ok(todo);
        }

        // DELETE v1/todos/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _context.Todos.FirstOrDefault(x => x.Id == id);
            if (todo == null)
                return NotFound();

            _context.Todos.Remove(todo);
            _context.SaveChanges();

            return Ok(new { success = "Registro excluído com sucesso" });
        }
    }
}
