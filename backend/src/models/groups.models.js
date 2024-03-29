import { queryDatabase } from "../config/dbConfigs.js";

export async function dbGetGroupById(groupID) {
  try {
    const query = "SELECT * FROM groups WHERE group_id = ?";
    const result = await queryDatabase(query, groupID);
    if (result.length === 0) {
      throw new Error("Group Not Found");
    }
    return result[0];
  } catch (error) {
    console.error("Error fetching group:", error);
    throw new Error(error.message);
  }
}

export async function dbGetMembersByGroupId(groupId) {
  try {
    const query = `
      SELECT members.*
      FROM group_members
      INNER JOIN members ON group_members.member_id = members.member_id
      WHERE group_members.group_id = ?
    `;
    const result = await queryDatabase(query, [groupId]);
    return result;
  } catch (error) {
    console.error("Error getting members by group ID:", error);
    throw new Error(error.message);
  }
}

export async function dbCreateGroup(groupData) {
  try {
    const query =
      "INSERT INTO groups (group_name, group_leader, group_text, course_id, max_members) VALUES (?, ?, ?, ?, ?)";
    const { group_name, group_leader, group_text, course_id, max_members } =
      groupData;
    const values = [
      group_name,
      group_leader,
      group_text,
      course_id,
      max_members,
    ];
    const result = await queryDatabase(query, values);
    return result;
  } catch (error) {
    console.error("Error creating group:", error);
    throw new Error(error.message);
  }
}

export async function dbAddMemberToGroup(groupId, memberId) {
  try {
    const query =
      "INSERT INTO group_members (group_id, member_id) VALUES (?, ?)";
    const result = await queryDatabase(query, [groupId, memberId]);
    return result;
  } catch (error) {
    console.error("Error adding member to group:", error);
    throw new Error(error.message);
  }
}

export async function dbDeleteGroup(groupId) {
  try {
    const query = "DELETE FROM groups WHERE group_id = ?";
    const result = await queryDatabase(query, groupId);
    return result;
  } catch (error) {
    console.error("Error deleting group:", error);
    throw new Error(error.message);
  }
}

export async function dbGetGroupsByMemberId(memberId) {
  try {
    const query = `
      SELECT groups.*
      FROM group_members
      INNER JOIN groups ON group_members.group_id = groups.group_id
      WHERE group_members.member_id = ?
    `;
    const result = await queryDatabase(query, memberId);
    return result;
  } catch (error) {
    console.error("Error getting group by member ID:", error);
    throw new Error(error.message);
  }
}