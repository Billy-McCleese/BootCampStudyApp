using Bootcamp.Study.Buddy.Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Bootcamp.Study.Buddy.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly StudentBootCampDbContext _dbContext;
        public QuestionsController(StudentBootCampDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllQuestions()
        {
            var questions = _dbContext.Questions.ToList();
            return Ok(questions);
        }
    }
}