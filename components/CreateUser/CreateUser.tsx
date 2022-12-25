import Axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  users: [User]
  setUsers: (users: [User]) => void
}

function CreateUser({ users, setUsers }: Props) {
  // state to manage form inputs
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  // state to manage form status
  const [status, setStatus] = useState('submit')

  // state to manage image upload
  const [imageUploaded, setImageUploaded] = useState(false)

  // state to manage image status
  const [imageStatus, setImageStatus] = useState('upload')

  // handle image upload
  const handleImage = async (files: FileList | null) => {
    // check if file is selected
    if (files) {
      setImageStatus('uploading...')
      console.log(files[0])

      // create data to send to cloudinary
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'degreeofsep')
      data.append('cloud_name', 'kunaaal13')

      // send data to cloudinary
      try {
        const res = await Axios.post(
          'https://api.cloudinary.com/v1_1/kunaaal13/image/upload',
          data
        )
        // handle success
        setImageUploaded(true)
        setImgUrl(res.data.url)

        setImageStatus('uploaded')
      } catch (error) {
        // handle error
        console.log(error)
      }
    }
  }

  // handle form submission
  const handleSubmit = () => {
    setStatus('submitting...')

    // Check if all fields are filled
    if (!name || !username || !bio || !imageUploaded)
      return alert('Please fill out all fields')

    // Check if img url is unique
    if (!imgUrl) return alert('Please upload an image')

    // create new user
    const newUser: User = {
      name,
      username,
      friends: [],
      img: imgUrl,
      bio,
    }

    const newUsers = users
    newUsers.push(newUser)

    // update users
    setUsers(newUsers)

    // reset form
    setStatus('submitted')
  }

  return (
    <div className='h-full w-full overflow-scroll p-3 pb-10 flex flex-col items-center'>
      <div className='w-full md:w-4/5 py-2'>
        <h1 className='text-2xl font-semibold'>Sign Up</h1>
      </div>

      <div className='w-full md:w-4/5 my-2 border border-gray-300 rounded-md p-2 py-10 flex items-center justify-center bg-white dark:bg-gray-700 dark:shadow-gray-700 shadow-md'>
        {status !== 'submitted' ? (
          <form className='w-full md:w-5/6'>
            <div className='md:items-start md:justify-between w-full md:flex portrait:flex portrait:flex-col-reverse portrait:items-center'>
              {/* Inputs */}
              <div className='lg:w-[600px] w-auto portrait:w-5/6'>
                {/* Name   */}
                <div className='mb-5'>
                  <h3 className='my-3 text-xl portrait:text-lg'>Name</h3>
                  <input
                    type='text'
                    className='w-full border border-[#474E57BF] dark:border-gray-200 p-3 rounded-md text-[#27272A] dark:text-white text-lg bg-inherit'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Username */}
                <div className='mb-5'>
                  <h3 className='my-3 text-xl portrait:text-lg'>Username</h3>
                  <input
                    type='text'
                    className='w-full border border-[#474E57BF] dark:border-gray-200 p-3 rounded-md text-[#27272A] dark:text-white text-lg bg-inherit'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                {/* Bio */}
                <div className='mb-5'>
                  <h3 className='my-3 text-xl portrait:text-lg'>Bio</h3>
                  <textarea
                    className='w-full border border-[#474E57BF] dark:border-gray-200 p-3 rounded-md text-[#27272A] dark:text-white text-lg bg-inherit'
                    placeholder='Bio'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </div>

              {/* Image */}
              <div className='flex flex-col items-center justify-center portrait:mb-10'>
                <div className='flex items-center justify-center md:justify-end md:h-[280px] md:w-[267px] portrait:w-[120px]'>
                  {imageUploaded && imgUrl ? (
                    <Image
                      src={imgUrl}
                      width={230}
                      height={230}
                      alt=''
                      className='cursor-pointer rounded-full h-60 w-60'
                    />
                  ) : (
                    <Image
                      src='/upload-image.svg'
                      width={230}
                      height={230}
                      alt=''
                      className='cursor-pointer'
                    />
                  )}
                </div>

                <div className='w-full portrait:p-3 px-3 flex items-center justify-center md:ml-4'>
                  <input
                    accept='image/*'
                    type='file'
                    id='select-image'
                    className='hidden'
                    onChange={(e) => {
                      if (imageStatus === 'upload') handleImage(e.target.files)
                    }}
                  />
                  <label htmlFor='select-image'>
                    <h3 className='w-full bg-[#2e89ff] cursor-pointer py-2 px-4 rounded-lg text-white text-base'>
                      {imageStatus}
                    </h3>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className='w-full md:w-3/4 flex items-center justify-center my-4'>
              <div
                onClick={(e) => handleSubmit()}
                className='w-5/6 md:w-1/4 cursor-pointer text-white bg-[#2e89ff] border px-3 py-2 text-center text-xl font-semibold rounded-md'
              >
                {status}
              </div>
            </div>
          </form>
        ) : (
          <>
            <div>
              <h1 className='text-2xl font-semibold'>
                Success! Created a user
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CreateUser
