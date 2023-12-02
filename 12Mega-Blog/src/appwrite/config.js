import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../config/config";

export class databaseServices {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // Post related
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            const created_document = await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                { title, content, featuredImage, status, userId }
            )
            return created_document;
        } catch (err) {
            console.log("Appwrite Service :: Database :: CreatePost Error", err)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            const updated_document = await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                { title, content, featuredImage, status }
            )
            return updated_document;
        } catch (err) {
            console.log("Appwrite Service :: Database :: UpdatePost Error", err)
        }
    }

    async deletePost(slug) {
        try {
            const delete_document = await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true;
        }catch(err){
            console.log("Appwrite Service :: Database :: DeletePost Error", err)
            return false;
        }
    }

    async getPost(slug) {
        try {
            const document = await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug   
            )
            return document;
        }catch(err){
            console.log("Appwrite Service :: Database :: GetPost Error", err);
        }
    }

    async allPost(queries = [Query.equal("status", "active")]) {
        try {
            const all_document = await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            )
            return all_document;
        }catch(err){
            console.log("Appwrite Service :: Database :: AllPost Error", err)
            return false;
        }
    }

    // Files related
    async uploadFile (file){
        try{
            await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
            return true;
        }catch(err){
            console.log("Appwrite Service :: Bucket :: UploadFile Error", err)
            return false;
        }
    }

    async deleteFile (fileId){
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true;
        }catch(err){
            console.log("Appwrite Service :: Bucket :: deleteFile Error", err)
            return false;
        }
    }

    getFilePreview (fileId) {
        try{
            return this.bucket.getFilePreview(
                config.appwriteBucketID,
                fileId
            )
        }catch(err){
            console.log("Appwrite Service :: Bucket :: deleteFile Error", err)
            return false;
        }

    }
}

const services = new databaseServices();

export default services;