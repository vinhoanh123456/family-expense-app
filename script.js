document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("expenseForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    let data = { amount, category };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyOeOoAOq4LHyv-U4muNUlCXx6m_4ApCWLxN1VlunrTf8cvXRJU4tZdJqiCxpiI883X/exec", {
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
