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


const [error, setError] = useState("");
const [success, setSuccess] = useState("");

if (!email || !password || !confirm) {
  setError("გთხოვთ შეავსოთ ყველა ველი");
  return;
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  setError("გთხოვთ შეიყვანოთ სწორი ელფოსტა");
  return;
}
if (password !== confirm) {
  setError("პაროლები არ ემთხვევა");
  return;
}
setError("");
setSuccess("რეგისტრაცია წარმატებით დასრულდა ✅");

{error && <p className="text-red-600">{error}</p>}
{success && <p className="text-green-600">{success}</p>}



