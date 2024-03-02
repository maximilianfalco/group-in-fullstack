import { queryDatabase } from "../config/dbConfigs.js";

export async function getReviewsByMemberId(memberId) {
  try {
    const query = `
      SELECT reviews.*, members.name as reviewer_name, members.member_bio as reviewer_bio
      FROM reviews
      INNER JOIN members ON reviews.reviewer_id = members.member_id
      WHERE reviews.reviewee_id = ?
    `;
    const result = await queryDatabase(query, [memberId]);
    return result;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error(error.message);
  }
}

export async function dbCreateReview(reviewerId, rating, comment, reviewedId) {
  console.log(reviewerId, rating, comment, reviewedId);
  const query = `
      INSERT INTO reviews (reviewer_id, rating, comment, reviewee_id)
      VALUES (?, ?, ?, ?)`;

  try {
      const results = await queryDatabase(query, [reviewerId, rating, comment, reviewedId]);

      return { reviewId: results.insertId, message: "Review added successfully" };
  } catch (error) {
      console.error("Error adding review:", error);
      throw error;
  }
}

export async function dbDeleteReview(reviewId) {
  const query = `
      DELETE FROM reviews 
      WHERE review_id = ?`;

  try {
      const results = await queryDatabase(query, [reviewId]);
      if (results.affectedRows === 0) {
          throw new Error("Review not found or unable to delete");
      }
      return { success: true, message: "Review deleted successfully" };
  } catch (error) {
      console.error("Error deleting review by ID:", error);
      throw error;
  }
}

export async function getReview(reviewId) {
  const query = `
      SELECT * 
      FROM reviews 
      WHERE id = ?`;

  try {
      const results = await queryDatabase(query, [reviewId]);

      if (results.length === 0) {
          throw new Error("Review not found");
      }

      return results[0];
  } catch (error) {
      console.error("Error fetching review by ID:", error);
      throw error;
  }
}
