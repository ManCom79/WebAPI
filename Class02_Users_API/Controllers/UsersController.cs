using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Class02_Users_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public List<string> Get()
        {
            return StaticDB.AllUsers();
        }

        [HttpGet("id/{userId}")]
        public ActionResult<string> Get(int userId)
        {
            try
            {
                if (userId <= 0 || userId > StaticDB.AllUsers().Count())
                {
                    return StatusCode(StatusCodes.Status404NotFound, $"Reuqested Id: {userId} is out of bounds!");
                }

                return StaticDB.AllUsers()[userId - 1];

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Sorry, error occured on server side. Please try again.");
            }
        }
    }
}
