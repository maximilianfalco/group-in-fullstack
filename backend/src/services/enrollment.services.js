import { dbEnrollMemberInCourse, getEnrollmentById } from "../models/enrollment.models.js";

export async function enrollMember(courseId, memberId) {
  try {
    const result = await dbEnrollMemberInCourse(courseId, memberId);
    return { message: "Member enrolled in course successfully", enrollment_id: result.enrollment_id };
  } catch (error) {
    throw new Error("Failed to enroll member in course");
  }
}

export async function fetchEnrollmentById(enrollmentId) {
  try {
    const enrollment = await getEnrollmentById(enrollmentId);
    return { enrollment };
  } catch (error) {
    throw new Error("Failed to fetch enrollment by ID");
  }
}
