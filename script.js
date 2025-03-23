document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("expenseForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    let data = { amount, category };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbw-wv-HTARsXZ4Gm2au1MRZa6uZb6ZECdN-4vLbOFJcJPXtO6SQNajq6Xq2BSTPrpL3/exec", {
  method: "POST",
  mode: "cors",
  credentials: "include", // Quan trọng để gửi xác thực
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
