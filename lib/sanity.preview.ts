"use client"

import { definePreview } from "next-sanity/preview"
import { projectId, dataset } from "./sanity.client"

// handling error
function onPublicAccessOnly() {
    throw new Error ('Unable to load preview as you are not logged in') 
}

if(!projectId || !dataset) {
    throw new Error ('Missing projectId and/or dataset. Check your Sanity.json or .env')
}

// if all is good
export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})