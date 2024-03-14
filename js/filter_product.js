// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));



// link in card
document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các thẻ card
    var cards = document.querySelectorAll('.card');
  
    // Lặp qua mỗi thẻ card và thêm sự kiện nhấp chuột
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        // Lấy liên kết từ thuộc tính href của thẻ a trong thẻ card
        var link = card.querySelector('a').getAttribute('href');
        
        // Chuyển hướng đến liên kết
        window.location.href = link;
      });
    });
  });
  