'use server';
import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";

import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState,formData){
    const email = formData.get('email');
    const password = formData.get('password');
    const username = formData.get('username');
    console.log("hey this is user",username);
    

    let errors ={};
    if(!email.includes('@')){
        errors.email = 'please enter a valid email adddress.';

    }
    if(password.trim().length < 8){
        errors.password = 'password must be 8 character length'
    }

    if(Object.keys(errors).length > 0){
        return{
            errors,
        };
    }

    const hashedPassword = hashUserPassword(password);
    try{
       const id = createUser(email, hashedPassword,username);
        await createAuthSession(id);
        redirect('/training');
    } catch (error){
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            return{
                errors: {
                    email: 'it seems that this email is already  exists'
                }
            }
        }
        throw error;
    }
    
}

export async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const existingUser = getUserByEmail(email);

    if(!existingUser){
        return {
            errors: {
                email: 'it seems that this email is not exists'
            }
        }
    }
    const isValidPassword = verifyPassword(existingUser.password, password);

    if(!isValidPassword){
        return {
            errors: {
                email: 'it seems that this password incorect'
            }
        }
    }
    await createAuthSession(existingUser.id);
    
    redirect('/training');
    
}

export async function auth(mode, prevState, formData) {
    if(mode === 'login'){
        return login(prevState, formData);
    }
    return signup(prevState, formData);
    
}

export async function logout(){
    await destroySession();
    redirect('/');
}

export async function userdata(){
    const email = formData.get('email');
    //console.log(email);
    return email;
}