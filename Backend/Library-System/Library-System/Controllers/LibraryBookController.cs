using Library_System.Models;
using Library_System.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Library_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryBookController : Controller
    {
        private readonly ILibraryService _libraryService;

        public LibraryBookController(ILibraryService libraryService)
        {
            _libraryService = libraryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var books = await _libraryService.GetAllLibraryBooks();
            return Ok(books);
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> CreateBook(LibraryBook book)
        {
            try
            {
                await _libraryService.CreateLibraryBook(book);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("update/{bookId}")]
        public async Task<IActionResult> UpdateBook(int bookId, [FromBody] LibraryBook book)
        {
            if (book == null)
            {
                return BadRequest("Book data must be provided.");
            }

            try
            {
                var libraryBook = await _libraryService.UpdateLibraryBook(bookId, book);

                if (libraryBook == null)
                {
                    return NotFound($"Book with ID {bookId} not found.");
                }

                return Ok(libraryBook);
            }
            catch (Exception ex)
            {
                // Consider logging the exception details here
                return StatusCode(500, "An error occurred while updating the book.");
            }
        }

        [HttpDelete]
        [Route("delete/{bookId}")]
        public async Task<IActionResult> DeleteBook(int bookId)
        {
            try
            {
                await _libraryService.DeleteLibraryBook(bookId);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
