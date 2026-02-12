// إعداد الاتصال بـ Supabase
// استبدل الروابط بالقيم الخاصة بك من Settings > API في Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = supabasejs.createClient(supabaseUrl, supabaseKey);

async function updateVisitStatus(visitId, newStatus, currentVersion) {
    const { data, error } = await supabase
        .from('visits')
        .update({ 
            status: newStatus, 
            status_version: currentVersion + 1 
        })
        .eq('id', visitId)
        .eq('status_version', currentVersion);

    if (error) {
        console.error("خطأ في التحديث:", error);
        alert("فشل التحديث: قد يكون هناك تعديل آخر تم على هذه الزيارة.");
    } else {
        console.log("تم تحديث الحالة بنجاح!");
    }
}