import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GrDownload } from "react-icons/gr";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

//this function is for react to pdf
const PDFDocument = ({ author, title, details }) => {
    return (
        <Document>
            <Page size="A4">
                <View style={styles.container}>
                    <Image style={styles.image} src={author?.img} />
                    <Text style={styles.title}>Course: {title}</Text>
                    <Text style={styles.details}>{details}</Text>
                </View>
            </Page>
        </Document>
    );
};

//styles for react to pdf
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    details: {
        fontSize: 14,
    },
});



const CourseDetails = () => {
    const courseInfo = useLoaderData();
    const { author, title, details, _id } = courseInfo;

    return (
        <>
            <div className="flex justify-center items-center my-8">
                <PDFDownloadLink
                    document={<PDFDocument author={author} title={title} details={details} />}
                    fileName="course_details.pdf"
                >
                    {
                        ({ loading }) => (
                            <button className="flex justify-center items-center px-12 py-4 rounded-lg text-white text-md font-bold bg-gradient-to-r from-cyan-500 to-blue-700">
                                <GrDownload className="w-6 h-6 me-2 text-white font-bold" />
                                {loading ? 'Generating PDF...' : 'Course Description'}
                            </button>
                        )
                    }
                </PDFDownloadLink>
            </div>
            <div className="flex justify-center items-center my-8" data-aos="fade-up">
                <div className="bg-base-200 mx-4 md:mx-8 lg:mx-auto rounded-lg shadow-lg p-6 md:p-8 lg:p-10 max-w-3xl">
                    <div className="mb-6">
                        <figure className="w-full">
                            <img className="w-full object-cover rounded-t-lg" src={author?.img} alt="" />
                        </figure>
                        <h3 className="text-xl font-bold mt-4">Course: {title}</h3>
                    </div>
                    <p className="mb-6">{details}</p>
                    <div className="flex justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="px-12 py-4 rounded-lg text-white text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-700">
                                Enroll Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};


export default CourseDetails;
