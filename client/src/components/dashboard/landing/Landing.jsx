import React from 'react'
import {BiSolidBot} from "react-icons/bi"
import {MdOutlineDone} from "react-icons/md"
import {AiTwotoneStar} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {FaTwitterSquare} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import "./Landing.css"

export default function Landing() {


  return (
    <>
      <div className='bg-gray-900 w-[100vw] h-[100vh] overflow-x-hidden'>


        <div className='flex justify-between relative items-center mt-2 mx-2
         md:pt-4 md:px-16'>
          <div className='flex items-center gap-1'>
            <img src="https://adley.ai/assets/aidely%20(2).webp" alt="logo" />
            <h3 className='text-xl sm:text-2xl text-white font-bold'>WizzyBot</h3>
          </div>
          <div className='flex flex-row top-12 absolute md:static text-white gap-9 md:gap-14 text-sm'>
            <h3 className='cursor-pointer active:scale-95'>Home</h3>
            <h3 className='cursor-pointer active:scale-95'>Features</h3>
            <h3 className='cursor-pointer active:scale-95'>Support</h3>
            <h3 className='cursor-pointer active:scale-95'>Pricing</h3>
            <h3 className='cursor-pointer active:scale-95'>Business</h3>
          </div>
          <div className='flex gap-3 items-center'>
            <div>
              <h3 className='text-white cursor-pointer active:scale-95'>Sign In</h3>
            </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-1 px-4 items-center justify-center flex rounded-full active:scale-95 cursor-pointer'>
              <h3 className='text-white'>Try Now</h3>
            </div>
          </div>
        </div>


        <div className='mt-14 flex sm:flex-row flex-col justify-between sm:px-16 px-2'>
          <div className='gap-4 w-[100vw] sm:w-[50vw] flex flex-col'>
            <div className='bg-gray-700 p-[2px] rounded-full px-8 w-fit'>
              <h3 className='font-extrabold text-transparent sm:text-xl text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>10X FASTER WITH AI</h3>
            </div>
            <div>
              <h3 className='text-white sm:text-4xl text-2xl font-bold'>WRITE ANIMATION</h3>
            </div>
            <div>
              <h3 className='text-white sm:text-4xl text-2xl font-bold'>WITH AI-POWERED COPYWRITING</h3>
            </div>
            <div>
              <h3 className='text-md text-gray-400'>Discover all the ways the Adley AI Content Platform can help streamline your creative workflows.</h3>
            </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-fit active:scale-95 p-2 px-3 rounded-full'>
              <button className='text-white'>Try Now for $1</button>
            </div>
          </div>
          {/* --------------right image-------------- */}
          <div className='w-[40%] hidden sm:block'>
            <img src="https://adley.ai/assets/aidly_1.webp" alt="img" />
          </div>
        </div>

        <div className='w-full h-8 -rotate-1 mt-8 bg-gradient-to-r from-purple-500 to-pink-500'></div>





        <div className='mt-8 gap-2 items-center text-center flex flex-col justify-center font-bold'>
          <h3 className='sm:text-3xl text-2xl text-white'>Main Features WizzyBot Provide</h3>
          <h3 className='text-md px-1 sm:w-[35vw] w-full text-gray-400'>Adley combines multiple AI features to help you speed up your workflow.</h3>
        </div>

        <div className='sm:px-16 px-2 gap-5 sm:gap-0 flex sm:flex-row flex-col justify-between mt-10'>
          <div className='px-10 sm:w-[25vw] w-full sm:h-[55vh] h-auto py-5 justify-center bg-gray-700 rounded-2xl flex flex-col items-center gap-6'>
            <div>
              <BiSolidBot className='text-white text-5xl'/>
            </div>
            <div>
              <h3 className='text-white text-2xl font-bold'>Create original content that ranks for seo</h3>
            </div>
            <div>
              <h3 className='text-gray-300'>Using our AI created content you can rank in Google like you would with human written texts.</h3>
            </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full px-4 active:scale-95 cursor-pointer'>
              <button className='text-white'>Get Started</button>
            </div>
          </div>

          <div className='px-10 sm:w-[25vw] w-full sm:h-[55vh] h-auto py-5 justify-center bg-gray-700 rounded-2xl flex flex-col items-center gap-6'>
            <div>
              <BiSolidBot className='text-white text-5xl'/>
            </div>
            <div>
              <h3 className='text-white text-2xl font-bold'>Create original content that ranks for seo</h3>
            </div>
            <div>
              <h3 className='text-gray-300'>Using our AI created content you can rank in Google like you would with human written texts.</h3>
            </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full px-4 active:scale-95 cursor-pointer'>
              <button className='text-white'>Get Started</button>
            </div>
          </div>

          <div className='px-10 sm:w-[25vw] w-full sm:h-[55vh] h-auto py-5 justify-center bg-gray-700 rounded-2xl flex flex-col items-center gap-6'>
            <div>
              <BiSolidBot className='text-white text-5xl'/>
            </div>
            <div>
              <h3 className='text-white text-2xl font-bold'>Create original content that ranks for seo</h3>
            </div>
            <div>
              <h3 className='text-gray-300'>Using our AI created content you can rank in Google like you would with human written texts.</h3>
            </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full px-4 active:scale-95 cursor-pointer'>
              <button className='text-white'>Get Started</button>
            </div>
          </div>
        </div>

        <div className='flex pt-4 sm:pt-4 border-gray-700 flex-col sm:flex-row h-[35vh] sm:h-[20vh] sm:-rotate-1 justify-between mx-4 sm:mx-0 px-2 sm:px-16 rounded-xl sm:rounded-none sm:p-8 mt-16 bg-gradient-to-r from-purple-500 to-pink-500'>
          <div className='sm:w-[40vw] font-bold'>
            <h3 className='text-white text-xl sm:text-3xl'>AChat API WITH PRE-BUILT UI AND NOTIFICATIONS INCLUDED</h3>
          </div>
          <div className='flex gap-4 pb-4 sm:pb-0 items-center'>
            <button className='text-white text-sm bg-gray-900 cursor-pointer active:scale-95 rounded-full h-10 px-4'>CHECK PLANS</button>
            <button className='text-white text-sm border-[3px] cursor-pointer active:scale-95 border-white rounded-full h-10 px-4'>GET A DEMO</button>
          </div>
        </div>



        <div className='mt-20 px-2 sm:px-16 flex sm:flex-row flex-col justify-between'>
          <div className='w-[100vw] sm:w-[45vw] gap-2 flex flex-col'>
            <div>
              <h3 className='text-white text-2xl sm:text-4xl font-bold'>Work smarter with easy access for user.</h3>
            </div>
            <div className='flex items-center gap-8 mt-4'>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center'><h3 className='text-white text-xl sm:text-3xl font-bold'>1</h3></div>
              <div>
                <h3 className='text-white text-md sm:text-xl font-bold'>CREATE ACCOUNT</h3>
                <h3 className=' text-gray-300'>Easy sign-up process</h3>
              </div>
            </div>
            

            <div className='flex items-center gap-8 mt-4'>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 sm:min-w-8 sm:min-h-8 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center'><h3 className='text-white text-md sm:text-3xl font-bold'>2</h3></div>
              <div>
                <h3 className='text-white text-md sm:text-xl font-bold'>CHOOSE CONTENT TYPE</h3>
                <h3 className=' text-gray-300'>Wide range of content types to choose from (e.g. articles, blog posts,ads copy)</h3>
              </div>
            </div>

            <div className='flex items-center gap-8 mt-4'>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center'><h3 className='text-white text-md sm:text-3xl font-bold'>3</h3></div>
              <div>
                <h3 className='text-white text-md sm:text-xl font-bold'>ENTER TITLE AND DESCRIPTION</h3>
                <h3 className=' text-gray-300'>Easy-to-use interface for entering your title and description</h3>
              </div>
            </div>

            <div className='flex items-center gap-8 mt-4'>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center'><h3 className='text-white text-md sm:text-3xl font-bold'>4</h3></div>
              <div>
                <h3 className='text-white text-md sm:text-xl font-bold'>WATCH ADLEY WRITE FOR YOU</h3>
                <h3 className=' text-gray-300'>Fast and efficient content generation using advanced AI technology</h3>
              </div>
            </div>
            
          </div>

          <div className='hidden sm:block'>
            <img className='w-[85%]' src="https://adley.ai/assets/aidly_2.webp" alt="image" />
          </div>
          
        </div>

        <div className='flex text-center justify-center items-center flex-col'>
          <div className='flex items-center justify-center mt-10'>
            <h3 className='text-white text-xl sm:text-3xl font-bold'>One price, for unlimited monthly content</h3>
          </div>
          <div className='mt-2 flex items-center text-center justify-center w-80'>
            <h4 className='text-white text-md'>Our goal is to be the most affordable AI writing tool on the market.</h4>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between mt-10'>

          {/* --------frist card-------- */}
          <div className='sm:mx-16 bg-black border-[1px] border-gray-600 rounded-2xl w-[96vw] sm:w-[28vw]'>
          <div className='flex flex-col gap-2 mt-4 items-center justify-center'>
            <h3 className='text-white text-3xl font-bold'>Business</h3>
            <h3 className='text-gray-300 text-[17px]'>Perfect for small business</h3>
            <h3 className='text-white text-xl font-bold'>$1 for 3 days then</h3>
          </div>
          <div className='flex justify-center gap-4 mt-3 items-center'>
            <h3 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>$7.99</h3>
            <h3 className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>/Month</h3>
          </div>

          <div className='bg-gray-900 flex flex-col gap-6 p-4 m-4 rounded-xl'>

            <div className='flex items-center mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 sm:w-6 sm:h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 sm:w-6 sm:h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 sm:w-6 sm:h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 sm:w-6 sm:h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 sm:w-6 sm:h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 sm:w-6 sm:h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>


            <div className='bg-black cursor-pointer active:scale-95 p-2 text-white items-center py-3 flex justify-center rounded-full'>
              <button className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Start your $1 trial today</button>
            </div>

            
          </div>


        </div>

        {/* --------------secound card------------------ */}

        <div className='mx-10 bg-gradient-to-r from-purple-400 to-pink-500 
        border-[1px] mt-8 sm:mt-0 border-gray-600 rounded-2xl w-[95vw] sm:w-[28vw] h-[75vh]'>
          <div className='flex flex-col gap-2 mt-4 items-center justify-center'>
            <h3 className='text-white text-3xl font-bold'>Business</h3>
            <h3 className='text-gray-300 text-[17px]'>Perfect for small business</h3>
            <h3 className='text-white text-xl font-bold'>$1 for 3 days then</h3>
          </div>
          <div className='flex justify-center gap-4 mt-3 items-center'>
            <h3 className='text-white text-4xl font-bold'>$7.99</h3>
            <h3 className='text-white'>/Month</h3>
          </div>

          <div className='bg-gray-900 opacity-100 flex flex-col gap-6 p-4 m-4 rounded-xl'>

            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 sm:w-6 sm:h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>


            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>


            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>


            <div className='bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer active:scale-95 p-2 text-white items-center py-3 flex justify-center rounded-full'>
              <button className='font-bold'>Start your $1 trial today</button>
            </div>

            
          </div>


        </div>

        {/* ------------3rd card------------------- */}

        <div className='mx-10 bg-black border-[1px] border-gray-600 rounded-2xl mt-40 w-[95vw] sm:w-[28vw]'>
          <div className='flex flex-col gap-2 mt-4 items-center justify-center'>
            <h3 className='text-white text-3xl font-bold'>Business</h3>
            <h3 className='text-gray-300 text-[17px]'>Perfect for small business</h3>
            <h3 className='text-white text-xl font-bold'>$1 for 3 days then</h3>
          </div>
          <div className='flex justify-center gap-4 mt-3 items-center'>
            <h3 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>$7.99</h3>
            <h3 className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>/Month</h3>
          </div>

          <div className='bg-gray-900 flex flex-col gap-6 p-4 m-4 rounded-xl'>

            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>
            <div className='flex items-center sm:mx-8 gap-3'>
              <div className='flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-6 h-6 rounded-full'>
                <MdOutlineDone className='text-black text-xl'/>
              </div>
              <div>
                <h3 className='text-white'>20K Words Included</h3>
              </div>
            </div>


            <div className='bg-black cursor-pointer active:scale-95 p-2 text-white items-center py-3 flex justify-center rounded-full'>
              <button className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Start your $1 trial today</button>
            </div>

            
          </div>


        </div>

        </div>

        {/* ------------What people say about us----------- */}
        <div className='flex flex-col gap-2 items-center justify-center text-white mt-10'>
          <h3 className='sm:text-3xl text-xl font-bold'>What people say about us</h3>
          <h3>People reviews</h3>
        </div>




        <div className='flex sm:ml-14 sm:mr-14 w-[100vw] mt-8 overflow-x-scroll no-scrollbar'>

          <div className='mx-5 min-w-[90vw] w-[90vw] sm:min-w-[25vw] sm:w-[25vw] rounded-lg p-4
           bg-black border-2  gap-3 flex flex-col border-pink-500'>
            <div className='flex gap-1'>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
            </div>
            <div className='gap-4 flex flex-col'>
              <h3 className='text-white text-xl'>Adley.ai has made a huge impact on our marketing, while helping us become more efficient.</h3>
              <h3 className='text-gray-400'>Adley.ai has made a huge impact on our marketing, while helping us become more efficient.</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-14 h-14 rounded-full bg-gray-500'></div>
              <div>
                <h3 className='text-white'>David</h3>
                <h3 className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>@David</h3>
              </div>
            </div>
          </div>

          <div className='mx-5 min-w-[90vw] w-[90vw] sm:min-w-[25vw] sm:w-[25vw] rounded-lg p-4
           bg-black border-2  gap-3 flex flex-col border-pink-500'>
            <div className='flex gap-1'>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
            </div>
            <div className='gap-4 flex flex-col'>
              <h3 className='text-white text-xl'>Adley.ai has made a huge impact on our marketing, while helping us become more efficient.</h3>
              <h3 className='text-gray-400'>Adley.ai has made a huge impact on our marketing, while helping us become more efficient.</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-14 h-14 rounded-full bg-gray-500'></div>
              <div>
                <h3 className='text-white'>David</h3>
                <h3 className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>@David</h3>
              </div>
            </div>
          </div>


          <div className='mx-5 min-w-[90vw] w-[90vw] sm:min-w-[25vw] sm:w-[25vw] rounded-lg p-4
           bg-black border-2  gap-3 flex flex-col border-pink-500'>
            <div className='flex gap-1'>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
            </div>
            <div className='gap-4 flex flex-col'>
              <h3 className='text-white text-xl'>Adley.ai has made a huge impact on our marketing, while helping us become more efficient.</h3>
              <h3 className='text-gray-400'>Adley.ai has made a huge impact on our marketing, while helping us become more efficient.</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-14 h-14 rounded-full bg-gray-500'></div>
              <div>
                <h3 className='text-white'>David</h3>
                <h3 className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>@David</h3>
              </div>
            </div>
          </div>


          <div className='mx-5 min-w-[90vw] w-[90vw] sm:min-w-[25vw] sm:w-[25vw] rounded-lg p-4
           bg-black border-2  gap-3 flex flex-col border-pink-500'>
            <div className='flex gap-1'>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
              <AiTwotoneStar className='text-yellow-400 text-2xl'/>
            </div>
            <div className='gap-4 flex flex-col'>
              <h3 className='text-white text-xl'>Adley.ai has made a huge impact on our marketing, while helping us become more efficient.</h3>
              <h3 className='text-gray-400'>Adley.ai has made a huge impact on our marketing, while helping us become more efficient.</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-14 h-14 rounded-full bg-gray-500'></div>
              <div>
                <h3 className='text-white'>David</h3>
                <h3 className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>@David</h3>
              </div>
            </div>
          </div>


          
          

        </div>


        {/* -------------------Subscribe to Newsletter----------------- */}

        <div className='flex flex-col relative bg-gray-700 p-4 sm:w-[82vw] rounded-2xl ml-auto mr-auto items-center justify-center mt-20'>
          <div className='w-[95vw] sm:w-[80vw] flex flex-col justify-center items-center
            bg-gradient-to-r rounded-2xl h-[50vh] from-purple-500 to-pink-500'>
            <h3 className='sm:text-4xl text-2xl text-white font-bold'>Subscribe to Newsletter</h3>
            <h3 className='text-xl text-white'>Enter your e-mail address to subscribe and get updates.</h3>

            <div className='w-[90vw] sm:w-[24vw] bg-white bg-opacity-50 overflow-hidden flex items-center justify-center mt-6 h-12 rounded-full border-[1px] border-white'>
              <input className='w-[85vw] sm:w-[20vw] bg-transparent outline-none h-full px-2 placeholder:text-white' placeholder='youemail@gmail.com' type="text" name="newletter"/>
              <div className='bg-white cursor-pointer active:scale-95 flex items-center justify-center mr-1 w-10 h-10 rounded-full'>
                <AiOutlineArrowRight className='text-2xl text-pink-500'/>
              </div>
            </div>
          </div>
          

          <div className='flex items-center justify-center gap-2 absolute -bottom-7 sm:-bottom-12'>
            <div>
              <img src="https://adley.ai/assets/Ellipse%202.webp" alt="user" />
            </div>
            <div>
              <img src="https://adley.ai/assets/Ellipse%203.webp" alt="user2" />
            </div>
            <div>
              <img src="https://adley.ai/assets/Ellipse%204.webp" alt="user3" />
            </div>
            <div>
              <img src="https://adley.ai/assets/Ellipse%205.webp" alt="user4" />
            </div>
            <div>
              <img src="https://adley.ai/assets/Ellipse%206.webp" alt="user5" />
            </div>
          </div>

        </div>


        <div className='sm:px-28 sm:mx-10 px-5 border-t-[1px] pt-12 mt-36 gap-4 flex sm:flex-row flex-col justify-between'>
          <div className='sm:w-[30vw] gap-4 flex flex-col'>
            <div className='flex items-center gap-2'>
              <img src="https://adley.ai/assets/aidely%20(2).webp" alt="logo" />
              <h3 className='text-3xl font-bold text-white'>WizzyBot</h3>
            </div>
            <div>
              <h3 className='text-white'>#1 Content writing tool powered by artificial intelligence. Generate original content in just seconds, instead of hours or days.</h3>
            </div>
          </div>

          <div className='text-white flex flex-col gap-3'>
            <h3 className='text-2xl font-bold text-white'>Pricing</h3>
            <h3>Business</h3>
            <h3>Gold</h3>
            <h3>Enterprise</h3>
          </div>

          <div className='text-white flex flex-col gap-3'>
            <h3 className='text-2xl font-bold text-white'>Pricing</h3>
            <h3>Business</h3>
            <h3>Gold</h3>
            <h3>Enterprise</h3>
          </div>

          <div className='text-white flex flex-col gap-3'>
            <h3 className='text-2xl font-bold text-white'>Pricing</h3>
            <h3>Business</h3>
            <h3>Gold</h3>
            <h3>Enterprise</h3>
          </div>


        </div>


        <div className='sm:px-28 px-5 sm:mx-10 border-t-[1px] flex sm:flex-row flex-col justify-between pt-2 mb-4 mt-10'>
          <div>
            <h3 className='text-white'>Copyright © 2023 Savage Moves LLC. All Rights Reserved.</h3>
          </div>
          <div className='flex items-center mt-2 justify-center gap-4'>
            <AiFillFacebook className='text-white text-2xl cursor-pointer'/>
            <FaTwitterSquare className='text-white text-2xl cursor-pointer'/>
            <AiFillLinkedin className='text-white text-2xl cursor-pointer'/>
          </div>
        </div>




      </div>
    </>
  )
}
