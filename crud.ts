import { prisma } from "./lib/prisma";

async function run() {
    //* create
    // const createUser = await prisma.users.create({
    //     data: {
    //         name: "Tanvir Ahmed",
    //         email: "tanvir@prisma"
    //     }
    // })
    // console.log('Created user:', createUser);

    // const createPost = await prisma.posts.create({
    //     data: {
    //         title: "Hello World2",
    //         content: "This is my first post!2",
    //         isPublished: true,
    //         authorId: 1
    //     }
    // })
    // console.log('Created post:', createPost);

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "This is my bio",
    //         dob: new Date(),
    //         userId: 1
    //     }
    // })
    // console.log('Created profile:', createProfile);
}

run();