import React from 'react'
import DonorSecondCard from './DonorSecondCard';

function Show({it}) {
    console.log(it);
    let content = "";
    content += <DonorSecondCard name={it.projectName} desc={it.projectDescription} />

    return content;
}

export default Show;