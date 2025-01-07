import './App.css';
import Product from './components/Product';
import { Routing } from './components/Routing';
 import { BrowserRouter as Router, Link } from 'react-router-dom';
 import { useState } from "react"

function App() {

  const [products, setproducts] = useState([

    {
        name: "The playing violin",
        img: "piano.png",
        price: 1350,
        descibe: "הכינור המנגן הינה אומנות עתיקה מאוד, הצייר לואיס צייר אותה בשנת 1987 בהשראת האווירה הקסומה ששרתה אז במדינתנו ",
        size: "15x30",

    },
    {
        name: "Sunset twilight",
        img: "sun.png",
        price: 1790,
        descibe: "האומנות המקורית והיפיפיה הולדה אצל הצייר לואיס בשנת 1950, כאשר ישה לעת ערב בביתו מול הים ואמר שיש שקיעות שצריך להנציח ",
        size: "30x45"
    },

    {
        name: "the galloping horses",
        img: "image (2).png",
        price: 22350,
        descibe: " מסתכל על ציור זה שעות רבות...אומנות הסוסים הדוהרים היא בין הציורים שלואיס הכי אהב, הוא הרגיש שהוא הכי מתבטא שם שזה סמל לפריצה ואהבה למילחמה ושלום לרוגע ועוצמה לואיס היה ",
        size: "15x30"
    },

    {
        name: "the love bird",
        img: "bird.png",
        price: "מחיר: 2,500 ש'ח",
        descibe: " ציפור האהוב היה יצירת מופת של לואיס ז היה אהבה ראשונה ",
        size: "15x30"
    } ,
    
    {
        name: "north star",
        img: "dark.png",
        price: "מחיר: 18,000 ש'ח",
        descibe: " האומנות הזאת היא השראה נדירה שקוראת אחת ב20 שנה שכוכב הצפון מראה את גודלו האמיתי אז מתייב אומן אמיתי לצייר את הציור הנפלא הזה ",
        size: "15x50"
    },
    
    {
        name: "Praying is the truth",
        img: "pray.png",
        price: "המחיר: 15,800 ש'ח",
        descibe: "להתפלל זאת האמת האמיתית, להתפלל זה לדעת מה אתה רוצה באמת, להתפלל זה החיבור הנכון לנשמה,גם אם לפעמים לא מבינים למה",
        size: "25x40"
    }

]);



const [codeCounter, setCodeCounter] = useState(1); // מונה רץ למזהה

const [myCart ,setmyCart]=useState([])

//פונקצית הוספה+ עדכון קוד רץ
const addCart=(products)=>{
  const productWithCode = { ...products, code: codeCounter }; // הוספת מזהה ייחודי למוצר
  setmyCart ([...myCart,productWithCode])
  setCodeCounter((codeCounter) => codeCounter + 1); // עדכון המונה הרץ
  };

  //פונקצית הסרה
  const lessFromCart=(code)=>{

    setmyCart((myCart)=> myCart.filter((item)=>item.code!==code))
  }
 
  



  return (
    
      <div className="App">
        <header>
          <h1> הגלרייה של לואיס</h1>
          < Link to="/Home"> הבית</Link>
          <Link to="/About">אודות </Link>
          <Link to="/Product"> מוצרים</Link>
          <Link to="/ContactUs"> צור קשר</Link>
          <Link to={"/shoppingBasket/"}> העגלה שלי({myCart.length})</Link>

        </header>
        <main>
          {/*שליחה לראוטר את הערכים שנצטרך להשתמש בהם בכל הקומפוננטות*/}
          <Routing products={products} addCart={addCart} myCart={myCart} lessFromCart={lessFromCart} />
          
          
        </main>
        <footer >&copy;    AVIGAILBL   כל הזכויות שמורות</footer>
      </div>
   
  );
}

export default App;
