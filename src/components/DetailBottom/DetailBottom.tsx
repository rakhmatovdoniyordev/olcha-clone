import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface Question {
  id: string;
  author: string;
  text: string;
  date: string;
  answer?: string;
}

export default function DetailBottom() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<"reviews" | "questions">(
    "reviews"
  );
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [questionText, setQuestionText] = useState("");

  const { t } = useTranslation("detail");

  const averageRating =
    reviews.length > 0
      ? Math.round(
          (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10
        ) / 10
      : 0;

  const handleAddReview = () => {
    if (reviewText.trim() && userRating > 0) {
      const newReview: Review = {
        id: Date.now().toString(),
        author: "Anonim foydalanuvchi",
        rating: userRating,
        text: reviewText,
        date: new Date().toLocaleDateString("uz-UZ"),
      };
      setReviews([newReview, ...reviews]);
      setReviewText("");
      setUserRating(0);
      setShowReviewModal(false);
    }
  };

  const handleAddQuestion = () => {
    if (questionText.trim()) {
      const newQuestion: Question = {
        id: Date.now().toString(),
        author: "Anonim foydalanuvchi",
        text: questionText,
        date: new Date().toLocaleDateString("uz-UZ"),
      };
      setQuestions([newQuestion, ...questions]);
      setQuestionText("");
      setShowQuestionModal(false);
    }
  };

  const handleDeleteReview = (id: string) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const handleDeleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <section className="mt-12 pt-8">
      <div className="flex gap-8 mb-8">
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 font-semibold transition-colors flex items-center gap-2 text-lg cursor-pointer  ${
            activeTab === "reviews"
              ? "border-b-2 border-black text-black"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {t("comment_of_product")}
          <span className="inline-flex items-center justify-center w-6 h-6 bg-red-600 text-white text-xs rounded-full font-bold">
            {reviews.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("questions")}
          className={`pb-3 font-semibold transition-colors flex items-center gap-2 text-lg  cursor-pointer ${
            activeTab === "questions"
              ? "border-b-2 border-black text-black"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {t("question_of_product")}
          <span className="inline-flex items-center justify-center w-6 h-6 bg-red-600 text-white text-xs rounded-full font-bold">
            {questions.length}
          </span>
        </button>
      </div>
      {activeTab === "reviews" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            {reviews.length === 0 && (
                <div className="w-full">
                <h3 className="text-lg font-semibold mb-2">
                    {t("empty_one_comment")}
                </h3>
                <p className="text-gray-500 text-sm">
                    {t("empty_two_comment")}
                </p>
                </div>
            )}
            <div className="flex flex-col items-end gap-3 p-4 border border-gray-300 rounded-xl flex-1">
              <div className="w-full flex items-center justify-between">
                <div className="text-4xl font-bold">{averageRating}</div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaRegStar
                      key={star}
                      size={20}
                      className={
                        star <= Math.round(averageRating)
                          ? "fill-red-600 text-red-600"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => setShowReviewModal(true)}
                className="w-64 py-2 bg-red-700 border-2 border-red-700 transition-colors duration-300 hover:bg-white hover:text-red-700 text-white rounded-lg  cursor-pointer"
              >
                {t("comment_button")}
              </button>
              <a href="#" className="text-gray-400 text-sm hover:text-gray-600">
                {t("comment_rule")}
              </a>
            </div>
          </div>
          {reviews.length > 0 && (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteReview(review.id)}
                      className="text-gray-400 hover:text-red-600 transition"
                    >
                      <IoClose size={20} />
                    </button>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaRegStar
                        key={star}
                        size={16}
                        className={
                          star <= review.rating
                            ? "fill-red-600 text-red-600"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {activeTab === "questions" && (
        <div className="space-y-6">
          {questions.length === 0 ? (
            <div className="flex items-center justify-between gap-6">
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-2">
                  {t("empty_one_question")}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {t("empty_two_question")}
                </p>
              </div>
              <div className="flex flex-col items-end gap-3 p-4 border border-gray-300 rounded-xl">
                <button
                  onClick={() => setShowQuestionModal(true)}
                  className="w-64 py-2 bg-red-700 text-white border-2 border-red-700 transition-colors duration-300 hover:bg-white hover:text-red-700 rounded-lg cursor-pointer"
                >
                  {t("question_button")}
                </button>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-gray-600"
                >
                  {t("question_rule")}
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-end mb-6">
                <div className="flex flex-col items-end gap-3 p-4 border border-gray-300 rounded-xl">
                  <button
                    onClick={() => setShowQuestionModal(true)}
                    className="w-64 py-2 bg-red-700 text-white rounded-lg border-2 border-red-700 transition-colors duration-300 hover:bg-white hover:text-red-700 cursor-pointer"
                  >
                    {t("question_button")}
                  </button>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-gray-600"
                  >
                    {t("question_rule")}
                  </a>
                </div>
              </div>
              {questions.map((question) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">{question.author}</p>
                      <p className="text-sm text-gray-500">{question.date}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteQuestion(question.id)}
                      className="text-gray-400 hover:text-red-700 transition cursor-pointer"
                    >
                      <IoClose size={20} />
                    </button>
                  </div>
                  <p className="text-gray-700">{question.text}</p>
                  {question.answer && (
                    <div className="mt-3 pl-4 border-l-2 border-green-600">
                      <p className="text-sm font-semibold text-green-600">
                        Javob:
                      </p>
                      <p className="text-gray-700 text-sm">{question.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{t("write_comment")}</h2>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-gray-400 hover:text-red-700 cursor-pointer"
              >
                <IoClose size={24} />
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                {t("evaluation")}:
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setUserRating(star)}
                    className="cursor-pointer"
                  >
                    <FaRegStar
                      size={28}
                      className={
                        star <= userRating
                          ? "fill-red-700 text-red-700"
                          : "text-gray-300"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                {t("comment_text")}:
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder={t("comment_placeholder")}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-red-700 resize-none"
                rows={4}
              />
            </div>

            <button
              onClick={handleAddReview}
              disabled={!reviewText.trim() || userRating === 0}
              className="w-full py-2 bg-red-700 text-white rounded-lg border-2 border-red-700 transition-colors duration-300 hover:bg-white hover:text-red-700 cursor-pointer disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-50 disabled:bg-gray-300"
            >
              {t("comment_button")}
            </button>
          </div>
        </div>
      )}
      {showQuestionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{t("write_question")}</h2>
              <button
                onClick={() => setShowQuestionModal(false)}
                className="text-gray-400 hover:text-red-700 cursor-pointer"
              >
                <IoClose size={24} />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                {t("question_text")}:
              </label>
              <textarea
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder={t("question_placeholder")}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-red-700 resize-none"
                rows={4}
              />
            </div>
            <button
              onClick={handleAddQuestion}
              disabled={!questionText.trim()}
              className="w-full py-2 bg-red-700 text-white rounded-lg border-2 border-red-600 transition-colors duration-300 hover:bg-white hover:text-red-600 cursor-pointer disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-50 disabled:bg-gray-300"
            >
              {t("question_button")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
