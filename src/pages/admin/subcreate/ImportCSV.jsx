import React from "react";

const ImportCSV = () => {
  return (
    <div className="import-csv gap-10">
      <div className="import-file">
        <h1 className="text-2xl font-semibold">Choose CSV File</h1>
        <form className="space-y-3 pt-3">
          <div className="input-group">
            <pre className="pb-2">Import CSV</pre>
            <input
              type="file"
              className="  p-3 file:bg-slate-500 file:rounded-md hover:text-semibold cursor-pointer file:py-2 file:px-3 file:text-white"
              name="csvFile"
              accept={".csv"}
            />
          </div>
          <div className="submit-button">
            <button className="rounded-md text-white px-3 py-2 bg-blue-500">
              Submit CSV
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImportCSV;
