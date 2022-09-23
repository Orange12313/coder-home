/*
 * @Author: tohsaka888
 * @Date: 2022-09-23 15:59:26
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-09-23 17:27:01
 * @Description: login modal
 */

import { Modal, Image } from 'antd'
import React, { useContext } from 'react'
import { LoginModalShowContext } from '../context'
import { AnimatePresence, motion } from 'framer-motion'
import ReactDOM from 'react-dom'
import { BsFillXCircleFill } from 'react-icons/bs'
import { Title } from './index.style'
// import { Mask } from './index.style'

type Props = {
  width: number;
  height?: number;
  title: string;
}

function LoginModal({
  width,
  height,
  title
}: Props) {
  const { visible, setVisible } = useContext(LoginModalShowContext)!

  return ReactDOM.createPortal(
    <AnimatePresence>
      {visible && (
        <>
          {/* <Mask onClick={() => {
            setVisible(false)
          }} /> */}
          <motion.div
            key="mask"
            initial={{
              zIndex: 10,
              width: '0px',
              height: '0px',
              position: 'fixed',
              top: '0px',
              left: '0px'
            }}
            onClick={() => setVisible(false)}
            animate={{
              backgroundColor: '#3d3d3d4c',
              width: '100vw',
              height: '100vh',
            }}
            exit={{
              opacity: 0
            }}
          />
          <motion.div
            key={'modal'}
            initial={{
              width: '0px',
              height: '0px',
              position: 'fixed',
              left: '100%',
              marginLeft: '0px',
              top: '0px',
              zIndex: 999,
              backgroundColor: '#2c2c2c',
              scale: 0,
              boxShadow: '10px 10px 30px #253748,-10px -10px 30px #253748',
              borderRadius: '8px',
              padding: '8px',
              color: '#fff'
            }}
            exit={{
              width: '0px',
              height: '0px',
              opacity: 0,
              scale: 0,
              left: '0px',
              top: '0px'
            }}
            animate={{
              width,
              height,
              scale: 1,
              left: '50%',
              marginLeft: - (width / 2) + 'px',
              top: '15vh',
            }}
          >
            <Image
              src={'/login.svg'}
              alt={'login'}
              width={100}
              height={100}
              style={{
                marginBottom: '30px',
                marginLeft: width / 2 + 'px'
              }}
            />
            <Title>
              {title}
            </Title>
            <motion.div
              initial={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                cursor: 'pointer'
              }}
              whileHover={{
                scale: 1.5,
                right: '16px',
                top: '16px'
              }}
            >
              <BsFillXCircleFill size={30} color={'#fff'}
                onClick={() => {
                  setVisible(false)
                }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )

}

export default LoginModal
