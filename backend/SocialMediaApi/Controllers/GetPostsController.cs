using Microsoft.AspNetCore.Mvc;

namespace SocialMediaApi.Controllers;

[ApiController]
[Route("[controller]")]

public class PostsController : ControllerBase
{
  private readonly ILogger<PostsController> _logger;
  public PostsController(ILogger<PostsController> logger)
  {
    _logger = logger;
  }
  [HttpGet("GetPosts")]
  public IEnumerable<Posts> Get()
  {
    return Enumerable.Range(1, 10).Select(index => new Posts
    {
      TimePosted = DateTime.Now.AddDays(index),
      PostsText = "asasas"

    })
    .ToArray();
  }

  [HttpPost("CreatePost")]
  public IActionResult Post([FromBody] Posts posts)
  {
    if (posts == null)
    {
      return BadRequest("Invalid data");
    }

    // Process the received data (e.g., save to a database)
    // ...

    return Ok("Data received successfully");

  }
  [HttpGet("get/{id}")]
  public IActionResult GetPersonById(int id)
  {
    // Retrieve a person from the database based on the provided ID
    // ...

    return Ok("Person retrieved successfully");
  }
}
