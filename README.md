# React + Vite

ეს არის React-ზე შექმნილი მარტივი E-commerce აპლიკაცია, სადაც მომხმარებელს შეუძლია:
პროდუქტების დათვალიერება, ფილტრაცია, კატეგორიის მიხედვით პროდუქტის დეტალების ნახვა, კალათაში დამატება და რაოდენობის მართვა, ავტორიზაცია (Login / Register).

Features
Authentication Pages – Login და Register.
Product Catalog – პროდუქტების ჩამონათვალი ბარათებით.
Category Filter – პროდუქტების ფილტრაცია კატეგორიის მიხედვით.
Product Details – კონკრეტული პროდუქტის სრული ინფორმაცია.
Shopping Cart – კალათაში დამატება, რაოდენობის გაზრდა/შემცირება, წაშლა.
Navigation – მარტივი Navbar ბმულებით.
Error Handling – 404 გვერდი არასწორი URL-ისთვის.

Components
Navbar.jsx → შეიცავს ლინკებს:
Home / Products,Cart,Login / Register, ProductCard.jsx - თითო პროდუქტის ბარათი: სურათი, სახელი, კატეგორია, ფასი.
ღილაკის დაჭერისას გადასცემს onSelectProduct(product) → გადაყვანა დეტალების გვერდზე.
CartItem.jsx → კალათის ერთი ელემენტი: პროდუქტის სახელი, ფასი, რაოდენობა. Increment/Decrement ღილაკები.
Remove ღილაკი (წაშლის კონკრეტულ პროდუქტს).

Pages (with US mapping) LoginPage.jsx → (US-01)მომხმარებელი შედის ანგარიშზე. ფორმა: email / password + ვალიდაცია.RegisterPage.jsx 
 (US-02) მომხმარებელი რეგისტრირდება. ფორმა: email / password / confirm password.
ProductsPage.jsx → (US-08, US-09) აჩვენებს ყველა პროდუქტს (ProductCard). ზედა ნაწილში არის CategoryFilter. ფილტრავს პროდუქტებს კატეგორიის მიხედვით.
  ProductDetailPage.jsx → (US-11)
აჩვენებს კონკრეტული პროდუქტის დეტალებს: სურათი, ფასი, აღწერა. ღილაკი → "Add to Cart".
  CartPage.jsx → (US-12, US-13, US-14, US-15)
აჩვენებს კალათაში არსებულ პროდუქტებს (CartItem). ფუნქციები: რაოდენობის გაზრდა / შემცირება.
პროდუქტის წაშლა. საერთო თანხის გამოთვლა.
NotFoundPage.jsx → (US-21)
404 გვერდი, თუ მომხმარებელი არასწორ ბმულზე გადავა.

React (Vite setup)
React Router DOM (გვერდებს შორის ნავიგაცია)
Context API (Cart state management)
Tailwind CSS (სტილიზაცია)
