using Bootcamp.Study.Buddy.Project.Models;
using Microsoft.AspNetCore.Mvc;
using System;

[ApiController]
[Route("api/favorites")]
public class FavoritesController : ControllerBase
{
    private readonly StudentBootCampDbContext _dbContext;

    public FavoritesController(StudentBootCampDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    [HttpGet("{userId}")]
    public IActionResult GetFavoritesByUserId(int userId)
    {
        var favorites = _dbContext.Favorites.Where(f => f.UserId == userId).ToList();
        return Ok(favorites);
    }
    [HttpPost]
    public IActionResult AddFavorite(Favorite favorite)
    {
        _dbContext.Favorites.Add(favorite);
        _dbContext.SaveChanges();
        return Ok(favorite);
    }

    [HttpDelete("{id}")]
    public IActionResult RemoveFavorite(int id)
    {
        var favorite = _dbContext.Favorites.FirstOrDefault(f => f.Id == id);
        if (favorite == null)
            return NotFound();

        _dbContext.Favorites.Remove(favorite);
        _dbContext.SaveChanges();
        return Ok();
    }
}