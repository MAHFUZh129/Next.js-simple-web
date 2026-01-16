"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";


export const getJobs = async () => {

    const jobs = await dbConnect(collections.JOBS).find({}).toArray();

    return jobs;
}
export const addJobs = async (job) => {
 
    const jobsCollection = dbConnect(collections.JOBS);

    const result = await jobsCollection.insertOne({
      ...job,
      createdAt: new Date(),
    });

    return { success: true };
  
};

export const getSingleJob= async (id) => {

    const job = await dbConnect(collections.JOBS).findOne({
        _id: new ObjectId(id),
    });

    if (!job) return null;

    //  serialize ObjectId
    return {
        ...job,
        _id: job._id.toString(),
    };
}