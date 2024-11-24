import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = ({ onQuizComplete }) => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [incorrectFabrics, setIncorrectFabrics] = useState([]);

  // Example list of questions (total 20)
  const questions = [
    { id: 1, fabric: "Wool", question: "What is Wool commonly used for?", options: ["Winter coats, sweaters, and suits", "Evening gowns", "Activewear"], correct: "Winter coats, sweaters, and suits" },
    { id: 2, fabric: "Cashmere", question: "What is Cashmere best known for?", options: ["Luxury scarves, sweaters, and coats", "Eco-friendly bags", "Sportswear"], correct: "Luxury scarves, sweaters, and coats" },
    { id: 3, fabric: "Cotton", question: "What is Cotton commonly used for?", options: ["Everyday wear, t-shirts, and dresses", "Bridal wear", "Blankets"], correct: "Everyday wear, t-shirts, and dresses" },
    { id: 4, fabric: "Linen", question: "Linen is commonly used for which type of wear?", options: ["Summer wear, shirts, and tablecloths", "Evening wear", "Sportswear"], correct: "Summer wear, shirts, and tablecloths" },
    { id: 5, fabric: "Silk", question: "What is Silk best known for?", options: ["Luxury bedding and evening gowns", "Eco-friendly bags", "Activewear"], correct: "Luxury bedding and evening gowns" },
    { id: 6, fabric: "Polyester", question: "What is Polyester commonly used for?", options: ["Sportswear, outerwear, and upholstery", "Winter coats", "Bridal wear"], correct: "Sportswear, outerwear, and upholstery" },
    { id: 7, fabric: "Tweed", question: "What is Tweed commonly used for?", options: ["Jackets, blazers, and skirts", "Luxury scarves", "Swimwear"], correct: "Jackets, blazers, and skirts" },
    { id: 8, fabric: "Denim", question: "Denim is best known for being used in?", options: ["Jeans, jackets, and casual wear", "Evening gowns", "Scarves"], correct: "Jeans, jackets, and casual wear" },
    { id: 9, fabric: "Rayon", question: "Rayon is typically used for?", options: ["Dresses, blouses, and linings", "Jackets", "Eco-friendly bags"], correct: "Dresses, blouses, and linings" },
    { id: 10, fabric: "Satin", question: "Satin is most commonly used for?", options: ["Evening wear, lingerie, and upholstery", "Sportswear", "Blankets"], correct: "Evening wear, lingerie, and upholstery" },
    { id: 11, fabric: "Velvet", question: "Velvet is often used for?", options: ["Party dresses, curtains, and upholstery", "Summer wear", "Shirts"], correct: "Party dresses, curtains, and upholstery" },
    { id: 12, fabric: "Leather", question: "Leather is best known for being used in?", options: ["Jackets, shoes, and bags", "Activewear", "Bridal wear"], correct: "Jackets, shoes, and bags" },
    { id: 13, fabric: "Chiffon", question: "Chiffon is often used for?", options: ["Evening dresses, blouses, and scarves", "Winter coats", "Jeans"], correct: "Evening dresses, blouses, and scarves" },
    { id: 14, fabric: "Organza", question: "Organza is best used in?", options: ["Bridal wear, evening gowns, and decor", "Sportswear", "Bags"], correct: "Bridal wear, evening gowns, and decor" },
    { id: 15, fabric: "Fleece", question: "Fleece is commonly used for?", options: ["Blankets, jackets, and winter wear", "Scarves", "Tents"], correct: "Blankets, jackets, and winter wear" },
    { id: 16, fabric: "Canvas", question: "Canvas is most often used for?", options: ["Bags, tents, and durable clothing", "Bridal wear", "Luxury scarves"], correct: "Bags, tents, and durable clothing" },
    { id: 17, fabric: "Spandex", question: "Spandex is commonly used for?", options: ["Activewear, swimwear, and stretch wear", "Evening gowns", "Bags"], correct: "Activewear, swimwear, and stretch wear" },
    { id: 18, fabric: "Georgette", question: "Georgette is often used for?", options: ["Dresses, tops, and scarves", "Jackets", "Sportswear"], correct: "Dresses, tops, and scarves" },
    { id: 19, fabric: "Nylon", question: "Nylon is most commonly used for?", options: ["Sportswear, hosiery, and umbrellas", "Bags", "Jeans"], correct: "Sportswear, hosiery, and umbrellas" },
    { id: 20, fabric: "Jute", question: "Jute is typically used for?", options: ["Eco-friendly bags, rugs, and mats", "Evening gowns", "Luxury bedding"], correct: "Eco-friendly bags, rugs, and mats" }
  ];
  

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    let updatedIncorrectFabrics = [...incorrectFabrics];

    // Add fabric to incorrect list if the answer is wrong
    if (selectedOption !== currentQuestion.correct) {
      updatedIncorrectFabrics = [...new Set([...updatedIncorrectFabrics, currentQuestion.fabric])];
      setIncorrectFabrics(updatedIncorrectFabrics);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Trigger onQuizComplete if provided
      if (onQuizComplete) {
        onQuizComplete(updatedIncorrectFabrics);
      }

      // Navigate to dashboard with final incorrect fabrics
      navigate("/dashboard", { state: { incorrectFabrics: updatedIncorrectFabrics } });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="p-8 bg-pink-500 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Quiz</h2>
        <p className="text-gray-800 mb-4">
          Question {currentQuestionIndex + 1}/{questions.length}
        </p>
        <p className="text-gray-800 font-medium mb-6">{currentQuestion.question}</p>
        <div>
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className="block bg-gray-200 hover:bg-green-500 text-black px-6 py-3 rounded-lg mb-4 w-full text-left transition-all"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
