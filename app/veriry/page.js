"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Verify = () => {
    const router = useRouter();
    useEffect(() => {
        const isloged = localStorage.getItem("loged_user_authentication");
        const idu = JSON.parse(isloged);
        if(idu != null) {
            router.push("../informacion");
        }else {
            router.push("../logininfo");
        }
    })
  return (
    <div>Verificando</div>
  )
}

export default Verify