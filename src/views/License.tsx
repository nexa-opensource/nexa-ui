import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container-fluid px-4 md:px-8 py-24 max-w-[800px] mx-auto flex-1">
        <div className="prose dark:prose-invert max-w-none">
          <h1>License</h1>
          <p className="lead">MIT License</p>
          
          <p>
             Copyright (c) 2024 ShadcnUIKit
          </p>

          <p>
             Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
          </p>
          
          <p>
             The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          </p>
          
          <p className="uppercase font-bold text-sm">
             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </p>

          <div className="mt-12 pt-8 border-t">
              <h2>Commercial Usage</h2>
              <p>
                  While the core library is open source under MIT, we offer a Pro license for teams that want priority support, advanced components, and Figma design files.
              </p>
              <ul>
                  <li><strong>Personal Use:</strong> Free forever.</li>
                  <li><strong>Commercial Projects:</strong> Free forever.</li>
                  <li><strong>Reselling:</strong> Not allowed without permission.</li>
              </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
