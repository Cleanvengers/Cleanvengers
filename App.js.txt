// كود تحديث حالة الزيارة مع منع التضارب
async function updateVisitStatus(visitId, newStatus, currentVersion) {
    const { data, error } = await supabase
        .from('visits')
        .update({ 
            status: newStatus, 
            status_version: currentVersion + 1 
        })
        .eq('id', visitId)
        .eq('status_version', currentVersion); // لن يتم التحديث إذا قام شخص آخر بتعديله قبلك

    if (error || data === null) {
        console.error("Conflict detected or update failed!");
        return;
    }
    console.log("Status updated successfully!");
}