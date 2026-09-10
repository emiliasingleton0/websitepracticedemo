'use client'
import {Analytics} from '@vercel/analytics/react'
import {useEffect,useState} from 'react'
export default function ConsentAnalytics(){const [ok,setOk]=useState(false);useEffect(()=>{setOk(localStorage.getItem('analytics-consent')==='accepted')},[]);return ok?<Analytics/>:null}
