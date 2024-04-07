import axios from "axios";

const BASE_URL = "https://8af6-152-15-112-68.ngrok-free.app";
//api axios call for auth
async function auth({email,name,type,image}){

    try {
        const response = await axios.post(BASE_URL + '/auth', {
            email,
            name,
            type,
            image
        });
        console.log('Response:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
    }
}

async function getCourses(){
    try{
        const response = await axios.post(BASE_URL + '/courses');
        console.log('Response:', response.data);
        return response.data;
    }
    catch(error){
        console.error('Error:', error);
    }
}

async function submitProfessorProfile({name,email,department,courses}){

    try {
        const response = await axios.post(BASE_URL + '/professors/profile', {
            name,
            email,
            department,
            courses
        });
        console.log('Response:', response.data);
        return response.data;
    }
    catch(error){
        console.error('Error:', error);
    }

}

async function getProfessorCourses({email}){
    try{
        const response = await axios.post(BASE_URL + '/professors/courses', {
            email
        })

        console.log('Response:', response.data);
        return response.data;
    }
    catch(error){
        console.error('Error:', error);
    }
}

async function postCourseHiring({email,courseId,courseName,positionsOpen,description}){
    try{

        const response = await axios.post(BASE_URL + '/postings', {
            email,
            courseId,
            courseName,
            positionsOpen,
            description
        })
        console.log('Response:', response.data);
        return response.data;


    }catch(error){
        console.error('Error:', error);
    }
}


async function studentProfile({name,email,major,degree,courses}){

    try {
        const response = await axios.post(BASE_URL + '/students/profile', {
            name,
            email,
            major,
            degree,
            courses
        });
        console.log('Response:', response.data);
        return response.data;
    }
    catch(error){
        console.error('Error:', error);
    }

}

async function getHiringPosts(){

    try{

        const response = await axios.post(BASE_URL + '/postings/jobs');
        console.log('Response:', response.data);
        return response.data;
    }
    catch(error){
        console.error('Error:', error);
    }
}

async function applyHiringPost({studentEmail,courseId,courseName,professorEmail,description}){
    try{
        const response = await axios.post(BASE_URL + '/applications/apply', {
            studentEmail,
            courseId,
            courseName,
            professorEmail,
            description
        })
        console.log('Response:', response.data);
        return response.data;
    }
    catch(error){
        console.error('Error:', error);
    }
}

async function viewCourseApplication({email}){
    try{

        const response = await axios.post(BASE_URL + '/professors/applications', {
            email
        })
        console.log('Response:', response.data);
        return response.data;
    }
    catch(error){
        console.error('Error:', error);
    }
}

async function getStudentApplication({id}){

    try{
        const response = await axios.post(BASE_URL + '/applications/view', {
            id,
        })
        console.log('Response:', response.data);
        return response.data;
    }
    catch(error){
        console.error('Error:', error);
    } 
    
}

export default api = {
    auth: auth,
    getCourses: getCourses,
    submitProfessorProfile: submitProfessorProfile,
    getProfessorCourses: getProfessorCourses,
    postCourseHiring: postCourseHiring,
    studentProfile: studentProfile,
    getHiringPosts: getHiringPosts,
    applyHiringPost: applyHiringPost,
    viewCourseApplication: viewCourseApplication
}