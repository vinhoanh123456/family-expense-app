document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("expenseForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    let data = { amount, category };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwBKXx2QdaDg-QrJ-kzCS2KQnwSX8f2CzqfWZ8cSW62KWo3cB70XMj98g4R5JduYub9/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Giao dịch đã được lưu!");
      document.getElementById("expenseForm").reset();
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Gửi dữ liệu thất bại!");
    }
  });
});
