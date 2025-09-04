const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password || !confirm) {
    alert("გთხოვთ შეავსოთ ყველა ველი");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("გთხოვთ შეიყვანოთ სწორი ელფოსტა");
    return;
  }

  if (password !== confirm) {
    alert("პაროლები არ ემთხვევა");
    return;
  }

  alert("რეგისტრაცია წარმატებით დასრულდა ✅");
};



