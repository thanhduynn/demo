'use client';
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Company from '~/types/company.type';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { database } from '../../../firebase';
import { FIREBASE_ADDRESS, FIREBASE_BROSCINE, FIREBASE_METADATA } from '~/constants/firebase';
import Address from '~/types/address.type';

export default function Footer() {
  const [metadata, setMetadata] = useState<Company>();
  const [address, setAddress] = useState<Address>();

  const fetchData = async () => {
    const metadataRef = doc(database, FIREBASE_BROSCINE, FIREBASE_METADATA);
    const metadataSnap = await getDoc(metadataRef);

    if (metadataSnap.exists()) {
      setMetadata(metadataSnap.data()['companyInformation'] as Company);

      const addressRef = collection(database, FIREBASE_BROSCINE, FIREBASE_METADATA, FIREBASE_ADDRESS);
      const addressSnap = await getDocs(addressRef);

      const addressData = addressSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setAddress(addressData[0] as Address);
    } else {
      alert("FAIL TO FETCH COMPANY DATA");
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Company Name */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {metadata?.name || "CONG TY X"}
              </h2>
            </div>

            {/* Addresses */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">CN Đà Nẵng:</span>{' '}
                  <span className="text-gray-300">
                    {address?.addressLine || "123 Street"} - {address?.city || "X City"} - {address?.country || "Y nation"}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">CN TP.HCM:</span>{' '}
                  <span className="text-gray-300">
                    22/11F Nguyễn Bình Khiêm - P Đa Kao - Quận 1
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Liên hệ sản xuất:</span>{' '}
                  <a
                    href="tel:0787567869"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {metadata?.phone || "01234xxxxx"}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Email:</span>{' '}
                  <a
                    href={"mailto:" + metadata?.email || "mailto:quochuynh.cinematographer@gmail.com"}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {metadata?.email || "quochuynh.cinematographer@gmail.com"}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:block w-1/2 h-60 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.437314997275!2d106.70056387481188!3d10.777511089373492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fad5427a1ef%3A0x93b0ea6826b7ae98!2s26%2F11F%20Nguy%E1%BB%85n%20B%E1%BB%89nh%20Khi%C3%AAm%2C%20Ph%C6%B0%E1%BB%9Dng%20%C4%90a%20Kao%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1sen!2s!4v1700000000000"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-400"
        >
          © {new Date().getFullYear()} {metadata?.name}. All rights reserved.
          Power by <a href="https://viemind.ai" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noreferrer"
          >VieMind Tech Consulting</a>
        </motion.div>
      </div>
    </footer>
  );
}
