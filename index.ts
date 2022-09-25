import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    //create user
  const user = await prisma.user.create({
    data: {
      name: 'Rupali',
      email: 'rupalidinde@gmail.com',
    },
  })
console.log('Created user :',user)

//Retrieve all users
const users = await prisma.user.findMany()
console.log('All users',users)

//update user
const updateUser = await prisma.user.update({
    where: {
      email: 'rupalidinde@gmail.com',
    },
    data: {
      name: 'rupali.dinde@inflectionzone.com',
    },
  })
  console.log('Updated user:',updateUser)

  //delete user
  const deleteUser = await prisma.user.delete({
    where: {
      email: 'rupalidinde12@gmail.com',
    },
  })
  console.log('Deleted user:',deleteUser)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })