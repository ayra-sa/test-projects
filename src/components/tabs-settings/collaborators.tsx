import React from "react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Collaborators = () => {
  return (
    <div className="w-1/2">
      <div className="space-y-1 mb-10">
        <h3>Invite</h3>
        <p className="text-tabs">Invite other members who can access and manage this event</p>
        <Button variant={"outline"}>Invite</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell><span className="text-muted">john@mail.com</span></TableCell>
            <TableCell><span className="text-[#B045FF]">OWNER</span></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Collaborators;
