import React from "react";
import { Card, CardContent } from "../ui/card";
import { Switch } from "../ui/switch";


const Guest = () => {
  return (
    <div>
      <p className="text-tabs">
        Create a form to collect guest information before they proceed to your
        album. Add new fields as needed, or rearrange existing ones by dragging.
      </p>

      <div className="mt-10 space-y-5">
        <Card className="pt-3">
          <CardContent className="!pb-3">
            <div className="flex items-center justify-between">
              <h2>Name</h2>

              <div className="flex items-center gap-x-2">
                <p className="text-tabs">Required</p>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="pt-3">
          <CardContent className="!pb-3">
            <div className="flex items-center justify-between">
              <h2>Email</h2>

              <div className="flex items-center gap-x-2">
                <p className="text-tabs">Required</p>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Guest;
