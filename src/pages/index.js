'use client'


import { useState, useEffect } from 'react'
import Photos from '@/components/Photos'
import Pagination from '@/components/Pagination'

export default function Home() {
  const [photos, setPhotos] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [photoPerPage, setPhotoPerPage] = useState(5)
 
  const fetchPhotos = async () => {
    const res = await fetch('https://api.unsplash.com/photos/?per_page=40&client_id=MxURYp4vxa2U0x7_u6E9RZgJoQXCD_Hgw7J50tELcQo')
    const data = await res.json()
    setPhotos(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPhotos()
  }, [])
 
  if (isLoading) return <h3>Loading...</h3>
  if (!photos) return <p>No profile data</p>

  // get current photo
  const indexOfLastPhotos = currentPage * photoPerPage
  const indexOfFirstPhotos = indexOfLastPhotos - photoPerPage
  const currentPhotos = photos.slice(indexOfFirstPhotos, indexOfLastPhotos);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-20">
      <h1 className="mb-5">My Photos</h1>
      <div className="mx-auto">
        <Photos 
          photos={currentPhotos}
         />
         <Pagination photosPerPage={photoPerPage} totalPhotos={photos.length} paginate={paginate} currentPage={currentPage} />
      </div>    
    </main>
  )
}
