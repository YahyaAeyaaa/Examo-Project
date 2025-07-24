import Button from "../element/button/button";

const WarningEditGuru = () => {
  return (
    <>
    <section className="w-70 mx-auto p-5 rounded-lg shadow my-50">
        <div className="flex items-center justify-center">
        <img src="/image/GuruEditWarning.png" alt="" className="mb-3"/>
        </div>
        <h1 className="text-center">
            Ujian Sedang Berlangsung
        </h1>
        <p>
            Data tidak dapat di ubah
        </p>
        <div className="flex items-center justify-center mt-3">
            <Button className="p-3 " text="Kembali" />
            </div>
    </section>
    </>
  );
}

export default WarningEditGuru;