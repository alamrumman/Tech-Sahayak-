import React from "react";
import { Button } from "./../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function UploadShc() {
  return (
    // Added `items-center` to vertically align the card and image
    // Added `gap-8` for spacing between the card and image
    <div className="bg-zinc-100 text-black flex justify-center items-center py-5 border-dashed gap-8">
      <Card className="max-w-sm rounded-lg shadow-2xl border-dashed">
        <CardHeader>
          <CardTitle className={"flex justify-center"}>
            Upload Your SHC Card
          </CardTitle>
        </CardHeader>

        <CardFooter className="flex-col gap-2">
          <div className="bg-zinc-100 text-black">
            <fieldset className="fieldset">
              <legend className="fieldset-legend ">Pick a file</legend>
              <input
                type="file"
                className="file-input text-white bg-green-600"
              />
              <label className="label">Max size 2MB</label>
            </fieldset>
          </div>
        </CardFooter>
      </Card>
      <div>
        {/* === CHANGES START HERE === */}
        <img
          src="/images/image copy 2.png" // Corrected path to use forward slashes
          alt="SHC Card Example" // Added descriptive alt text for accessibility
          className="h-100 w-auto" // Set height to 12rem (192px) and width to auto
        />
        {/* === CHANGES END HERE === */}
      </div>
    </div>
  );
}

export default UploadShc;
