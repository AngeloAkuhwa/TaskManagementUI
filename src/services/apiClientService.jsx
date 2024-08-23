import apiClient from "./apiClient";

const getRequest = async (url) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error);
    throw error;
  }
};

const postRequest = async (url, data) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Failed to post to ${url}:`, error);
    throw error;
  }
};

const putRequest = async (url, data) => {
  try {
    await apiClient.put(url, data);
  } catch (error) {
    console.error(`Failed to update at ${url}:`, error);
    throw error;
  }
};

const deleteRequest = async (url) => {
  try {
    await apiClient.delete(url);
  } catch (error) {
    console.error(`Failed to delete at ${url}:`, error);
    throw error;
  }
};

//Tasks API Functions
export const getAllTasks = async () => getRequest("/tasks");

export const getTaskById = async (id) => getRequest(`/tasks/${id}`);

export const createTask = async (taskData) => postRequest("/tasks", taskData);

export const updateTask = async (id, taskData) => putRequest(`/tasks/${id}`, taskData);

export const deleteTask = async (id) => deleteRequest(`/tasks/${id}`);

//Groups API Functions
export const getAllGroups = async () => getRequest("/groups");

export const getGroupById = async (id) => getRequest(`/groups/${id}`);

export const createGroup = async (taskData) => postRequest("/groups", taskData);

export const updateGroup = async (id, taskData) =>putRequest(`/groups/${id}`, taskData);

export const deleteGroup = async (id) => deleteRequest(`/groups/${id}`);


//Lists API Functions
export const getAllLists = async () => getRequest("/lists");

export const getListById = async (id) => getRequest(`/lists/${id}`);

export const createList = async (taskData) => postRequest("/lists", taskData);

export const updateList = async (id, taskData) => putRequest(`/lists/${id}`, taskData);

export const deleteList = async (id) => deleteRequest(`/lists/${id}`);