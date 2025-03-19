"use client"

import { useState } from "react"
import RichTextEditor from "@/components/rich-text-editor"
import { Button } from "@/components/ui/button"

export default function ExampleUsage() {
  const [content, setContent] = useState(
    "<p>This is an example of how to use the Rich Text Editor in your application.</p>",
  )
  const [savedContent, setSavedContent] = useState("")

  const handleSave = () => {
    setSavedContent(content)
    // In a real application, you would send this to your backend
    console.log("Saving content:", content)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Example Integration</h2>

      <div className="border rounded-md p-4 bg-card">
        <RichTextEditor initialContent={content} onChange={setContent} />

        <div className="mt-4 flex justify-end">
          <Button onClick={handleSave}>Save Content</Button>
        </div>
      </div>

      {savedContent && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Saved Content Preview:</h3>
          <div className="border rounded-md p-4 prose" dangerouslySetInnerHTML={{ __html: savedContent }} />
        </div>
      )}
    </div>
  )
}

