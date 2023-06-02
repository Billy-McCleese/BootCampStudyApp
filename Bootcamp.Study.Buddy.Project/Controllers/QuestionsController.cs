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

        [HttpGet("{id}")]
        public IActionResult GetQuestionById(int id)
        {
            var question = _dbContext.Questions.FirstOrDefault(q => q.Id == id);
            if (question == null)
                return NotFound();

            return Ok(question);
        }
        [HttpPost]
        public IActionResult AddQuestion(Question question)
        {
            _dbContext.Questions.Add(question);
            _dbContext.SaveChanges();
            return Ok(question);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateQuestion(int id, Question updatedQuestion)
        {
            var question = _dbContext.Questions.FirstOrDefault(q => q.Id == id);
            if (question == null)
                return NotFound();

            question.QuestionTitle = updatedQuestion.QuestionTitle;
            question.Answer = updatedQuestion.Answer;

            _dbContext.SaveChanges();

            return Ok(question);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteQuestion(int id)
        {
            var question = _dbContext.Questions.FirstOrDefault(q => q.Id == id);
            if (question == null)
                return NotFound();

            _dbContext.Questions.Remove(question);
            _dbContext.SaveChanges();

            return Ok();
        }
    }

}
