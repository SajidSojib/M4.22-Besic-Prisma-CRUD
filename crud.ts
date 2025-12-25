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

    // const getUserById = await prisma.users.findUnique({
    //     where: {
    //         id: 1
    //     },
    //     include: {
    //         posts: true,
    //         profile: true
    //     }
    // });
    // console.dir(getUserById, { depth: null });


    //* update
    // const updateUser = await prisma.profile.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         bio: "This is my new bio"
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: true
    //     }
    // });
    // console.log('Updated user:', updateUser);

    //* upsert -> update if exists, else create
    // const upsertUser = await prisma.users.upsert({
    //     where: {
    //         email: "tanvir@prisma"
    //     },
    //     update: {
    //         name: "Tanvir Ahmed Maruf",
    //         email: "tanvir@prisma"
    //     },
    //     create: {
    //         name: "Tanvir Ahmed Maruf",
    //         email: "tanvir@prisma"
    //     }
    // });
    // console.log('Upserted user:', upsertUser);

    // //* delete
    // const deleteUser = await prisma.users.delete({     //! error - has related post, profile
    //     where: {
    //         id: 1
    //     }
    // });

    const deleteUser = await prisma.users.delete({
        where: {
            id: 2
        }
    })
    console.log('Deleted user:', deleteUser);
}

run();