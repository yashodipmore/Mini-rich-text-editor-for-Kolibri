"use client"

import { useState } from "react"
import RichTextEditor from "@/components/rich-text-editor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [content, setContent] = useState("<p>Welcome to the Rich Text Editor prototype for Kolibri Studio!</p>")

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Rich Text Editor Prototype</h1>

      <Tabs defaultValue="editor">
        <TabsList className="mb-4">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="html">HTML Output</TabsTrigger>
        </TabsList>

        <TabsContent value="editor">
          <Card>
            <CardHeader>
              <CardTitle>Kolibri Studio Editor</CardTitle>
              <CardDescription>Create rich text content with formatting options</CardDescription>
            </CardHeader>
            <CardContent>
              <RichTextEditor
                initialContent={content}
                onChange={setContent}
                placeholder="Start creating your content..."
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="html">
          <Card>
            <CardHeader>
              <CardTitle>HTML Output</CardTitle>
              <CardDescription>The HTML representation of your content</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-auto max-h-[400px] text-sm">{content}</pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

