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


    //* read
    // const allUsers = await prisma.users.findMany();     //? only returns user data
    // console.log('All users:', allUsers);

    // const allUsers = await prisma.users.findMany({
    //     // include: {           //? returns user data + related data
    //     //     posts: true,
    //     //     profile: true
    //     // }

    //     select: {               //? only returns selected portions from user + related data
    //         name: true,
    //         posts: true,
    //         profile: {
    //             select: {
    //                 bio: true
    //             }
    //         }
    //     }
    // });
    // console.dir(allUsers, { depth: null });
}

run();